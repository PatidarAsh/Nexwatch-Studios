"use client";
import { motion } from "framer-motion";

export default function AccountForm({
  showAccountForm,
  formData,
  setFormData,
  handleSave,
  setErrorMessage
}) {

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call handleSave function passed from parent component
    const success = await handleSave();
    // Check if saving was successful, if not, display error message
    if (!success) {
      setErrorMessage("Failed to save. Please try again.");
    } else {
      // Clear error message if submission was successful
      setErrorMessage("");
    }
  };



  return (
    showAccountForm && (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="px-8 py-8 h-[300px] fixed top-[10px] gap-3 flex flex-col items-start right-[10px] bg-black opacity-[0.85] z-[999]">
          <div className="flex flex-col gap-5 ">
            <input
              type="text"
              name="name"
              value={formData["name"]}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="Enter your name"
              className="px-5 py-3 rounded-lg placeholder:text-red-700 text-lg text-[#e5b109] outline-none focus:outline-none"
            />
            <input
              name="pin"
              type="password"
              value={formData["pin"]}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
                })
              }
              maxLength={4}
              placeholder="Enter your PIN"
              className="px-5 py-3 rounded-lg placeholder:text-red-700 text-lg text-[#e5b109] outline-none focus:outline-none"
            />
            <button
              onClick={handleSubmit}
              className="border p-4 bg-[#e5b109] outline-none rounded-lg text-black text-lg font-bold"
            >
              Save
            </button>
          </div>
        </div>
      </motion.div>
    )
  );
}
