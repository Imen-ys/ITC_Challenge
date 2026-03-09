import { useState } from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import { AddClient } from "../../Services/AddClientAPI";

export default function ClientForm() {

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    age: "",
    notes: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.address || !formData.age) {
      setMessage("All fields except notes are required");
      return;
    }

    try {

      const response = await AddClient(formData);

      setMessage("Client created successfully");

      console.log(response);

      setFormData({
        fullName: "",
        phone: "",
        address: "",
        age: "",
        notes: ""
      });

    } catch (error) {
      setMessage(error.message || "Error creating client");
    }

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow p-6 w-full"
    >

      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Add Client
      </h1>

      {message && (
        <p className="text-red-500 mb-4">{message}</p>
      )}

      <div className="grid md:grid-cols-2 gap-4">

        <InputField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Johnathan Doe"
        />

        <InputField
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+213 073 456 789"
        />

        <div className="md:col-span-2">

          <InputField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="123 Business Ave, Suite 100"
          />

        </div>

        <InputField
          label="Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="28"
        />

      </div>

      <div className="mt-4">

        <TextAreaField
          label="Additional Notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Enter any specific preferences, historical data..."
        />

      </div>

      <div className="flex justify-end gap-4 mt-6">

        <button
  type="button"
  onClick={() =>
    setFormData({
      fullName: "",
      phone: "",
      address: "",
      age: "",
      notes: ""
    })
  }
  className="text-gray-500 hover:text-black"
>
  Cancel
</button>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          Create Client Profile
        </button>

      </div>

    </form>
  );
}