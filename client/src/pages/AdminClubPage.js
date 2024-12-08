import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import {
  FaGlobe,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaTrash,
} from "react-icons/fa";

const AdminPage = () => {
  const [clubDetails, setClubDetails] = useState({
    name: "",
    description: "",
    image: null,
  });

  const [members, setMembers] = useState([{ name: "", role: "" }]);
  const [socials, setSocials] = useState({
    website: "",
    instagram: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    youtube: "",
  });

  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/club/club-info/-1`,
          { withCredentials: true }
        );

        setClubDetails({
          image: response.data.logo_path,
          name: response.data.clubname,
          description: response.data.description,
        });

        const parsedMembers = JSON.parse(response.data.members);
        setMembers(parsedMembers || [{ name: "", role: "" }]);

        const parsedSocials = response.data.socials
          ? JSON.parse(response.data.socials)
          : {};
        setSocials({
          website: response.data.website || "",
          instagram: parsedSocials.insta || "",
          facebook: parsedSocials.facebook || "",
          twitter: parsedSocials.twitter || "",
          linkedin: parsedSocials.linkedin || "",
          youtube: parsedSocials.youtube || "",
        });
      } catch (error) {
        if (error.response && error.response.status === 403) {
          navigate("/club/");
        } else {
          console.error("Error fetching data: ", error);
        }
      }
    };

    fetchData();
  }, []);

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setClubDetails({ ...clubDetails, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () =>
        setClubDetails({ ...clubDetails, image: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const triggerImageUpload = () => {
    fileInputRef.current.click();
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const addMember = () => setMembers([...members, { name: "", role: "" }]);
  const removeMember = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  const handleSocialsChange = (e) => {
    const { name, value } = e.target;
    setSocials({ ...socials, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("description", clubDetails.description);
      formData.append("socials", JSON.stringify(socials));
      formData.append("website", socials.website);
      formData.append("members", JSON.stringify(members));

      if (clubDetails.image) {
        const fileInput = fileInputRef.current.files[0];
        formData.append("logo", fileInput);
      }

      await axios.post(
        `${process.env.REACT_APP_API_URL}/club/update-info`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      alert("Updates submitted successfully!");
    } catch (error) {
      console.error("Error submitting updates: ", error);
      alert("Failed to submit updates. Please try again.");
    }
  };

  return (
    <div className="md:p-10 pt-10 bg-gray-100 min-h-screen">
      {/* <h1 className="text-3xl font-bold mb-6">Admin Page</h1> */}
      <form
        className="bg-white shadow-md rounded p-6 space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Club Image Upload */}
        <div>
          <h2 className="text-2xl mb-4">Club Image</h2>
          <div
            className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300 cursor-pointer flex items-center justify-center"
            onClick={triggerImageUpload}
          >
            {clubDetails.image ? (
              <img
                src={clubDetails.image}
                alt="Club"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-500">Upload Image</span>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>

        <hr className="my-4" />

        {/* Club Details */}
        <div>
          <h2 className="text-2xl mb-4">Club Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-1">Club Name</label>
              <input
                type="text"
                name="name"
                value={clubDetails.name}
                onChange={handleDetailsChange}
                className="w-full font-normal p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Description</label>
              <textarea
                name="description"
                value={clubDetails.description}
                onChange={handleDetailsChange}
                rows="4"
                className="w-full font-normal p-2 border border-gray-300 rounded"
              ></textarea>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        {/* Members Section */}
        <div>
          <h2 className="text-2xl mb-4">Club Members</h2>
          <div className="space-y-4">
            {members.map((member, index) => (
              <div key={index} className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={member.name}
                  onChange={(e) =>
                    handleMemberChange(index, "name", e.target.value)
                  }
                  className="w-1/2 font-normal p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="Position"
                  value={member.role}
                  onChange={(e) =>
                    handleMemberChange(index, "role", e.target.value)
                  }
                  className="w-1/2 font-normal p-2 border border-gray-300 rounded"
                />
                <button
                  type="button"
                  onClick={() => removeMember(index)}
                  className="p-3 items-center justify-center text-white bg-red-500 hover:bg-red-700 rounded"
                  style={{ height: "100%" }}
                >
                  <FaTrash className="text-xl" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addMember}
              className="text-blue-500 hover:underline"
            >
              Add Member
            </button>
          </div>
        </div>

        <hr className="my-4" />

        {/* Socials */}
        <div>
          <h2 className="text-2xl mb-4">Socials</h2>
          <div className="space-y-4">
            {Object.entries(socials).map(([key, value]) => (
              <div key={key} className="flex items-center space-x-4">
                {getSocialIcon(key)}
                <input
                  type="text"
                  name={key}
                  placeholder={`Enter ${capitalize(key)} URL`}
                  value={value}
                  onChange={handleSocialsChange}
                  className="flex-1 font-normal p-2 border border-gray-300 rounded"
                />
              </div>
            ))}
          </div>
        </div>

        <hr className="my-4" />

        {/* Submit */}
        <div className="text-right">
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

const getSocialIcon = (socialName) => {
  switch (socialName) {
    case "website":
      return <FaGlobe className="text-blue-500 text-xl" />;
    case "instagram":
      return <FaInstagram className="text-pink-500 text-xl" />;
    case "facebook":
      return <FaFacebook className="text-blue-500 text-xl" />;
    case "twitter":
      return <FaTwitter className="text-blue-500 text-xl" />;
    case "linkedin":
      return <FaLinkedin className="text-blue-700 text-xl" />;
    case "youtube":
      return <FaYoutube className="text-red-500 text-xl" />;
    default:
      return null;
  }
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default AdminPage;
