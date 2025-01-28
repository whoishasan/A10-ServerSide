import mongoose from "mongoose";

const myDonationSchema = new mongoose.Schema();

const myDonation = mongoose.model("Donations", myDonationSchema);

export default myDonation;
