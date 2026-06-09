// api/send-otp.js
const Twilio = require("twilio");

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ success:false, message:"Method not allowed" });
  const { phone } = req.body || {};
  if (!phone) return res.status(400).json({ success:false, message:"Phone is required" });

  try {
    const client = Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    const service = client.verify.services(process.env.TWILIO_VERIFY_SERVICE_SID);
    const verification = await service.verifications.create({ to: phone, channel: "sms" });
    return res.json({ success: true, sid: verification.sid });
  } catch (err) {
    console.error("send-otp error:", err);
    return res.status(500).json({ success:false, message: err.message || "Failed to send OTP" });
  }
};
