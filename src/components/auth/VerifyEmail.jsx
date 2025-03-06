import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import LoginModal from "./LoginModal";

export default function VerifyEmail() {
    const { token } = useParams();
    const [status, setStatus] = useState("loading");
    const [message, setMessage] = useState("");
    const [showLoginModal, setShowLoginModal] = useState(false);

    useEffect(() => {
        if (!token) {
            setStatus("error");
            setMessage("Invalid verification link.");
            return;
        }

        axios
            .get(`https://taskly-app-q35u.onrender.com/verify-email/${token}`)
            .then((response) => {
                setStatus("success");
                setMessage(response.data.success);
            })
            .catch((error) => {
                setStatus("error");
                setMessage(error.response?.data?.error || "Verification failed.");
            });
    }, [token]);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Card className="p-6 w-96 shadow-lg">
                <CardContent>
                    {status === "loading" ? (
                        <div className="flex flex-col items-center">
                            <Loader2 className="w-6 h-6 animate-spin" />
                            <p className="mt-2">Verifying your email...</p>
                        </div>
                    ) : (
                        <div className="text-center">
                            <p className={`text-lg font-semibold ${status === "success" ? "text-green-600" : "text-red-600"}`}>
                                {message}
                            </p>
                            {status === "success" && (
                                <Button className="mt-4" onClick={() => setShowLoginModal(true)}>
                                    Go to Login
                                </Button>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>

            {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
        </div>
    );
}
