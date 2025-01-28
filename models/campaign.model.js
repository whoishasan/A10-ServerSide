import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema();

const Campaign = mongoose.model("campaigns", campaignSchema);

export default Campaign;
