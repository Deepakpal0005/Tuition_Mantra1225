// api/verify-otp.js
const Twilio = require("twilio");

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ verified:false, message:"Method not allowed" });
  const { phone, code } = req.body || {};
  if (!phone || !code) return res.status(400).json({ verified:false, message:"phone & code required" });

  try {
    const client = Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    const check = await client.verify.services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verificationChecks.create({ to: phone, code: code });

    if (check.status === "approved") {
      return res.json({ verified: true });
    } else {
      return res.json({ verified: false, status: check.status });
    }
  } catch (err) {
    console.error("verify-otp error:", err);
    return res.status(500).json({ verified:false, message: err.message || "Verification failed" });
  }
};
