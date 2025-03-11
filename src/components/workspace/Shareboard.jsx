import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../../api/axios";
import { useAuth } from "../../context/AuthContext";

// Material UI Components
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";

const Shareboard = () => {
  const { user } = useAuth();
  const workspace_id = user?.workspace_id;

  const [boardMembers, setBoardMembers] = useState([]);
  const [pendingInvites, setPendingInvites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inviteLink, setInviteLink] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    if (!workspace_id) return;

const fetchMembers = async () => {
  try {
    setLoading(true);
    const res = await api.get(`/workspace/${workspace_id}/members`);
    setBoardMembers(res.data.members);
    setPendingInvites(res.data.pending_invites);
  } catch (err) {
    console.error("Fetch Members Error:", err);
    setError(err.response?.data?.error || "Failed to fetch members");
  } finally {
    setLoading(false);
  }
};

fetchMembers();
  }, [workspace_id]);

  const handleInvite = async (values, { resetForm, setSubmitting }) => {
    try {
      setError(null);
      setLoading(true);

  const res = await api.post("/invite", { email: values.email, workspace_id });

  setPendingInvites([...pendingInvites, { email: values.email, status: "pending", invited_by: "You" }]);
  resetForm();
} catch (err) {
  console.error("Invite Error:", err);
  setError(err.response?.data?.error || "Failed to send invite");
} finally {
  setLoading(false);
  setSubmitting(false);
}
  };

  const generateInviteLink = async () => {
    try {
      setError(null);
      const res = await api.post("/invite/generate-link", { workspace_id });

  if (res.status === 200) {
    setInviteLink(res.data.link);
  } else {
    throw new Error("Failed to generate link");
  }
} catch (err) {
  console.error("Generate Link Error:", err);
  setError(err.response?.data?.error || "Error generating link");
}
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink);
    setSnackbarOpen(true);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6, p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Share Board
      </Typography>

  {error && <Alert severity="error">{error}</Alert>}

  {/* Invite Form */}
  <Formik
    initialValues={{ email: "" }}
    validationSchema={Yup.object({ email: Yup.string().email("Invalid email").required("Email is required") })}
    onSubmit={handleInvite}
  >
    {({ isSubmitting, handleChange, values }) => (
      <Form>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={9}>
            <TextField
              type="email"
              name="email"
              label="Enter email address"
              variant="outlined"
              fullWidth
              value={values.email}
              onChange={handleChange}
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </Grid>
          <Grid item xs={3}>
            <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading || isSubmitting}>
              {loading ? <CircularProgress size={24} /> : "Invite"}
            </Button>
          </Grid>
        </Grid>
      </Form>
    )}
  </Formik>

  {/* Generate and Copy Workspace Invite Link */}
  <Grid container spacing={2} alignItems="center" sx={{ mt: 3 }}>
    <Grid item>
      <Button onClick={generateInviteLink} variant="contained" color="success">
        Create Link
      </Button>
    </Grid>
    {inviteLink && (
      <>
        <Grid item xs>
          <TextField type="text" value={inviteLink} fullWidth InputProps={{ readOnly: true }} />
        </Grid>
        <Grid item>
          <Button onClick={copyToClipboard} variant="contained" color="secondary">
            Copy
          </Button>
        </Grid>
      </>
    )}
  </Grid>

  {/* Members and Pending Invites */}
  <Grid container spacing={4} sx={{ mt: 4 }}>
    {/* Board Members */}
    <Grid item xs={12} md={6}>
      <Card>
        <CardContent>
          <Typography variant="h6">Board Members</Typography>
          {loading ? (
            <CircularProgress />
          ) : boardMembers.length > 0 ? (
            <List>
              {boardMembers.map((member) => (
                <ListItem key={member.id} divider>
                  <ListItemText primary={`${member.username} (${member.email})`} />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography color="textSecondary">No members yet</Typography>
          )}
        </CardContent>
      </Card>
    </Grid>

    {/* Pending Invites */}
    <Grid item xs={12} md={6}>
      <Card>
        <CardContent>
          <Typography variant="h6">Join Requests</Typography>
          {loading ? (
            <CircularProgress />
          ) : pendingInvites.length > 0 ? (
            <List>
              {pendingInvites.map((invite, index) => (
                <ListItem key={index} divider>
                  <ListItemText primary={`${invite.email} - ${invite.status}`} secondary={`Invited by ${invite.invited_by}`} />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography color="textSecondary">No pending invites</Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  </Grid>

  {/* Snackbar for Copying Invite Link */}
  <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)}>
    <Alert severity="success">Invite link copied to clipboard!</Alert>
  </Snackbar>
</Container>
  );
};

export default Shareboard;