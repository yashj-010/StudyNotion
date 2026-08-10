import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { formattedDate } from "../../../utils/dateFormatter"
import IconBtn from "../../common/IconBtn"

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()

  return (
    <div className="pb-10">
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        My Profile
      </h1>

      {/* Main Container Card containing Left and Right split */}
      <div className="flex flex-col lg:flex-row gap-6 bg-richblack-800 border-[1px] border-richblack-700 rounded-2xl p-6 shadow-sm mb-10">
        
        {/* Left Card: Profile Image, Name, Email */}
        <div className="relative flex flex-col items-center justify-center lg:w-1/3 bg-richblack-900 border-[1px] border-richblack-700 rounded-xl p-8">
          {/* Edit Icon Button */}
          <button
            onClick={() => navigate("/dashboard/settings")}
            className="absolute top-4 right-4 p-2 text-richblack-300 hover:text-cyan-100 hover:bg-richblack-800 rounded-full transition-all duration-200 outline-none"
            title="Edit Profile"
          >
            <RiEditBoxLine size={20} />
          </button>
          
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-32 h-32 rounded-full object-cover mb-5 ring-4 ring-richblack-800 shadow-md"
          />
          <h2 className="text-2xl font-semibold text-richblack-5 mb-1">
            {user?.firstName + " " + user?.lastName}
          </h2>
          <p className="text-sm font-medium text-richblack-300">
            {user?.email}
          </p>
        </div>

        {/* Right Card: About Section */}
        <div className="relative flex flex-col lg:w-2/3 bg-richblack-900 border-[1px] border-richblack-700 rounded-xl p-8">
           {/* Edit Icon Button */}
           <button
            onClick={() => navigate("/dashboard/settings")}
            className="absolute top-4 right-4 p-2 text-richblack-300 hover:text-cyan-100 hover:bg-richblack-800 rounded-full transition-all duration-200 outline-none"
            title="Edit About"
          >
            <RiEditBoxLine size={20} />
          </button>

          <h3 className="text-lg font-semibold text-richblack-5 mb-4">About</h3>
          <p
            className={`${
              user?.additionalDetails?.about
                ? "text-richblack-100"
                : "text-richblack-400 italic"
            } text-sm font-medium leading-relaxed`}
          >
            {user?.additionalDetails?.about ?? "Write Something About Yourself"}
          </p>
        </div>
      </div>

      {/* Personal Details Card */}
      <div className="relative flex flex-col bg-richblack-800 border-[1px] border-richblack-700 rounded-2xl p-8 px-10 shadow-sm">
        {/* Edit Icon Button */}
        <button
          onClick={() => navigate("/dashboard/settings")}
          className="absolute top-8 right-10 p-2 text-richblack-300 hover:text-cyan-100 hover:bg-richblack-700 rounded-full transition-all duration-200 outline-none"
          title="Edit Personal Details"
        >
          <RiEditBoxLine size={20} />
        </button>

        <h3 className="text-lg font-semibold text-richblack-5 mb-8">
          Personal Details
        </h3>
        
        <div className="flex max-w-[600px] justify-between">
          <div className="flex flex-col gap-y-6">
            <div>
              <p className="mb-1 text-sm text-richblack-500">First Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="mb-1 text-sm text-richblack-500">Email</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-1 text-sm text-richblack-500">Gender</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <div>
              <p className="mb-1 text-sm text-richblack-500">Last Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="mb-1 text-sm text-richblack-500">Phone Number</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="mb-1 text-sm text-richblack-500">Date Of Birth</p>
              <p className="text-sm font-medium text-richblack-5">
                {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                  "Add Date Of Birth"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}