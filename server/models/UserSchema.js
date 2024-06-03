const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    trim: true,
    minlength: [6, "Name should contain atleast 6 characters"],
    maxLength: [30, "Name can not be more than 30 characters"],
  },
  email: {
    type: String,
    unique: [true, "Email already exists"],
    
    required:true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  password: {
    type: String,
    required: [true, "please enter a password"],
    minlength: [8, "password should have at least 8 characters"],
    select: false,
  },

 isAdmin:{
     type : Boolean,
    default:false,
 },
  avatar: {
    public_id: { type: String, required: true },
    url: { type: String, required: true },
  },
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpire: {
    type: Date,
  },

},{
    timestamps:true
}
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.getJwtToken = async function () {
  return jwt.sign({ id: this._id }, process.env.SECRET, { expiresIn: "24h" });
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 3600000; //expires in one hour
  return resetToken;
};

const User= mongoose.model("User", userSchema);
module.exports = User;
