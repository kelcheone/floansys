import { useContext, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { Gcontext } from "../../context/Gcontext";
/***
 * capture this from the form
 * first_name
last_name
national_id
phone_number
email
status
role
password
 */

const EditModal = ({ user, show, setShow }) => {
  const {
    updateFormData,
    setUpdateFormData,
    handleUpdateUser,
    viewUserDetails,
  } = useContext(Gcontext);

  return (
    <div
      className={`${
        show ? "block" : "hidden"
      } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50`}
    >
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-[#ACBFB7] w-1/2 h-full rounded-lg">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-xl font-semibold">Edit User</h1>
            <AiOutlineClose
              className="text-2xl cursor-pointer"
              onClick={() => setShow(false)}
            />
          </div>
          <form
            onSubmit={(e) => handleUpdateUser(e, viewUserDetails.user_id)}
            className="flex flex-col items-center justify-center space-y-4 p-4"
          >
            <div className="flex justify-between w-full">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-2 border bg-black text-white border-gray-300 mr-3 rounded-lg"
                value={updateFormData.first_name}
                onChange={(e) =>
                  setUpdateFormData({
                    ...updateFormData,
                    first_name: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-2 border bg-black text-white border-gray-300 rounded-lg"
                value={updateFormData.last_name}
                onChange={(e) =>
                  setUpdateFormData({
                    ...updateFormData,
                    last_name: e.target.value,
                  })
                }
              />
            </div>
            <input
              type="text"
              placeholder="National ID"
              className="w-full p-2 border bg-black text-white border-gray-300 rounded-lg"
              value={updateFormData.national_id}
              onChange={(e) =>
                setUpdateFormData({
                  ...updateFormData,
                  national_id: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-2 border bg-black text-white border-gray-300 rounded-lg"
              value={updateFormData.phone_number}
              onChange={(e) =>
                setUpdateFormData({
                  ...updateFormData,
                  phone_number: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full p-2 border bg-black text-white border-gray-300 rounded-lg"
              value={updateFormData.email}
              onChange={(e) =>
                setUpdateFormData({ ...updateFormData, email: e.target.value })
              }
            />
            <div className="flex justify-between w-full">
              <select
                name="status"
                id="status"
                className="w-1/2 p-2 border bg-black text-white border-gray-300 mr-3 rounded-lg"
                value={updateFormData.status}
                onChange={(e) =>
                  setUpdateFormData({
                    ...updateFormData,
                    status: e.target.value,
                  })
                }
              >
                <option value="active">Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <select
                name="role"
                id="role"
                className="w-1/2 p-2 border bg-black text-white border-gray-300 rounded-lg"
                value={updateFormData.role}
                onChange={(e) =>
                  setUpdateFormData({ ...updateFormData, role: e.target.value })
                }
              >
                <option value="user">Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border bg-black text-white border-gray-300 rounded-lg"
              value={updateFormData.password}
              onChange={(e) =>
                setUpdateFormData({
                  ...updateFormData,
                  password: e.target.value,
                })
              }
            />

            <button
              type="submit"
              className="w-3/4 p-2 bg-blue-500 text-white rounded-lg"
              // onClick={() => handleUpdateUser(viewUserDetails.user_id)}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
