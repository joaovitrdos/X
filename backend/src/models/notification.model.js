import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
    {
        from: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        to: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        type: {
            type: String,
            enum: ["follow", "like", "comment",],
            required: true,
        },
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            default: null, // Opcional
        },
        comment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
            default: null, // Opcional
        },
    },
    { timestamps: true }
);

const Notification = mongoose.model("Notification", notificationSchema);

export default Notification;