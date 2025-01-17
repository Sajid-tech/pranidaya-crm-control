import React from "react";
import { MdDelete, MdEdit, MdOutlineRemoveRedEye, MdOutlineStickyNote2 } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { PiNotebook } from "react-icons/pi";
import { FaUsers } from "react-icons/fa6";
import Button from '@mui/material/Button';

const getUserControlData = () => {
  const userControl = localStorage.getItem("userControl");
  try {
    return userControl ? JSON.parse(userControl) : [];
  } catch (error) {
    console.error("Error parsing usercontrol data from localStorage", error);
    return [];
  }
};

const shouldRenderButton = (buttonName, userType, status) => {
  const data = getUserControlData();
  console.log("danjks", data);
  return data.some((item) => {
    const userTypes = item.usertype.split(",");
    return (
      item.button == buttonName &&
      userTypes.includes(userType) &&
      item.status.toLowerCase() == status.toLowerCase()
    );
  });
};

//   master -list item

export const AddListItem = ({ onClick, className }) => {
  const userType = localStorage.getItem("user_type_id");

  if (!shouldRenderButton("AddListItem", userType, "active")) return null;

  return (
    <button onClick={onClick} className={` ${className}`}>
      + Add Item
    </button>
  );
};
AddListItem.page = "Master";

export const EditListItem = ({ onClick, className }) => {
  const userType = localStorage.getItem("user_type_id");

  if (!shouldRenderButton("EditListItem", userType, "active")) return null;

  return (
    <button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={className}
      title="Edit List item"
    >
      <MdEdit className="h-4 w-4" />
    </button>
  );
};
EditListItem.page = "Master";

//   master-vendor list

export const AddVendorItem = ({ onClick, className }) => {
  const userType = localStorage.getItem("user_type_id");

  if (!shouldRenderButton("AddVendorItem", userType, "active")) return null;

  return (
    <button onClick={onClick} className={` ${className}`}>
      + Add Vendors
    </button>
  );
};
AddVendorItem.page = "Master";

export const EditVendorItem = ({ onClick, className }) => {
  const userType = localStorage.getItem("user_type_id");

  if (!shouldRenderButton("EditVendorItem", userType, "active")) return null;

  return (
    <button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={className}
      title="Edit Vendor"
    >
      <MdEdit className="h-4 w-4" />
    </button>
  );
};
EditVendorItem.page = "Master";

// master -occasion list

export const AddOccassionItem = ({ onClick, className }) => {
  const userType = localStorage.getItem("user_type_id");

  if (!shouldRenderButton("AddOccassionItem", userType, "active")) return null;

  return (
    <button onClick={onClick} className={` ${className}`}>
      + Add Occassion
    </button>
  );
};
AddOccassionItem.page = "Master";

export const EditOccassionItem = ({ onClick, className }) => {
  const userType = localStorage.getItem("user_type_id");

  if (!shouldRenderButton("EditOccassionItem", userType, "active")) return null;

  return (
    <button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={className}
      title="Edit Occassion"
    >
      <MdEdit className="h-4 w-4" />
    </button>
  );
};
EditOccassionItem.page = "Master";

// stock- purchase list 


export const AddPurchase = ({ onClick, className }) => {
    const userType = localStorage.getItem("user_type_id");
  
    if (!shouldRenderButton("AddPurchase", userType, "active")) return null;
  
    return (
      <button onClick={onClick} className={` ${className}`}>
        + Add Purchase
      </button>
    );
  };
  AddPurchase.page = "Stock";
  
  export const EditPurchase = ({ onClick, className }) => {
    const userType = localStorage.getItem("user_type_id");
  
    if (!shouldRenderButton("EditPurchase", userType, "active")) return null;
  
    return (
      <button
        variant="ghost"
        size="icon"
        onClick={onClick}
        className={className}
        title="Edit Purchase"
      >
        <MdEdit className="h-4 w-4" />
      </button>
    );
  };
  EditPurchase.page = "Stock";
//   stock- consumption list 



export const AddConsumption = ({ onClick, className }) => {
    const userType = localStorage.getItem("user_type_id");
  
    if (!shouldRenderButton("AddConsumption", userType, "active")) return null;
  
    return (
      <button onClick={onClick} className={` ${className}`}>
        + Add Consumption
      </button>
    );
  };
  AddConsumption.page = "Stock";
  
  export const EditConsumption = ({ onClick, className }) => {
    const userType = localStorage.getItem("user_type_id");
  
    if (!shouldRenderButton("EditConsumption", userType, "active")) return null;
  
    return (
      <button
        variant="ghost"
        size="icon"
        onClick={onClick}
        className={className}
        title="Edit Consumption"
      >
        <MdEdit className="h-4 w-4" />
      </button>
    );
  };
  EditConsumption.page = "Stock";

//   donor -donor 
export const AddCashReceipt = ({ onClick, className }) => {
  const userType = localStorage.getItem("user_type_id");

  if (!shouldRenderButton("AddCashReceipt", userType, "active")) return null;

  return (
    <button onClick={onClick} className={` ${className}`}>
      + CashRecepit
    </button>
  );
};
AddCashReceipt.page = "Donor";
export const AddDonor = ({ onClick, className }) => {
  const userType = localStorage.getItem("user_type_id");

  if (!shouldRenderButton("AddDonor", userType, "active")) return null;

  return (
    <button onClick={onClick} className={` ${className}`}>
      + Add Donor
    </button>
  );
};
AddDonor.page = "Donor";


export const ViewDonor = ({ onClick, className }) => {
  const userType = localStorage.getItem("user_type_id");

  if (!shouldRenderButton("ViewDonor", userType, "active")) return null;

  return (
    <button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={className}
      title="View Donor"
    >
      <IoEye className="h-4 w-4" />
    </button>
  );
};
ViewDonor.page = "Donor";
export const EditDonor = ({ onClick, className }) => {
  const userType = localStorage.getItem("user_type_id");

  if (!shouldRenderButton("EditDonor", userType, "active")) return null;

  return (
    <button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={className}
      title="Edit Donor"
    >
      <MdEdit className="h-4 w-4" />
    </button>
  );
};
EditDonor.page = "Donor";
export const CashReceiptDonor = ({ onClick, className }) => {
  const userType = localStorage.getItem("user_type_id");

  if (!shouldRenderButton("CashReceiptDonor", userType, "active")) return null;

  return (
    <button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={className}
      title="Cash Receipt"
    >
      <PiNotebook className="h-4 w-4" />
    </button>
  );
};
CashReceiptDonor.page = "Donor";
export const MaterialReceiptDonor = ({ onClick, className }) => {
  const userType = localStorage.getItem("user_type_id");

  if (!shouldRenderButton("MaterialReceiptDonor", userType, "active")) return null;

  return (
    <button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={className}
      title="Material Receipt"
    >
      <MdOutlineStickyNote2 className="h-4 w-4" />
    </button>
  );
};
MaterialReceiptDonor.page = "Donor";
export const FamilyMemberDonor = ({ onClick, className }) => {
  const userType = localStorage.getItem("user_type_id");

  if (!shouldRenderButton("FamilyMemberDonor", userType, "active")) return null;

  return (
    <button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={className}
      title="Family Member"
    >
      <FaUsers className="h-4 w-4" />
    </button>
  );
};
FamilyMemberDonor.page = "Donor";
export const EditDuplicateDonor = ({ onClick, className }) => {
  const userType = localStorage.getItem("user_type_id");

  if (!shouldRenderButton("EditDuplicateDonor", userType, "active")) return null;

  return (
    <button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={className}
      title="Edit Duplicate"
    >
      <MdEdit className="h-4 w-4" />
    </button>
  );
};
EditDuplicateDonor.page = "Donor";
export const DeleteDuplicateDonor = ({ onClick, className }) => {
  const userType = localStorage.getItem("user_type_id");

  if (!shouldRenderButton("DeleteDuplicateDonor", userType, "active")) return null;

  return (
    <button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={className}
      title="Delete Duplicate"
    >
      <MdDelete className="h-4 w-4" />
    </button>
  );
};
DeleteDuplicateDonor.page = "Donor";
export const EditDonationReceipt = ({ onClick, className }) => {
  const userType = localStorage.getItem("user_type_id");

  if (!shouldRenderButton("EditDonationReceipt", userType, "active")) return null;

  return (
    <button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={className}
      title="Edit"
    >
      <MdEdit className="h-4 w-4" />
    </button>
  );
};
EditDonationReceipt.page = "Receipts";
export const ViewDonationReceipt = ({ onClick, className }) => {
  const userType = localStorage.getItem("user_type_id");

  if (!shouldRenderButton("ViewDonationReceipt", userType, "active")) return null;

  return (
    <button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={className}
      title="View"
    >
      <MdOutlineRemoveRedEye className="h-4 w-4" />
    </button>
  );
};
ViewDonationReceipt.page = "Receipts";
export const ViewMaterialReceipt = ({ onClick, className }) => {
  const userType = localStorage.getItem("user_type_id");

  if (!shouldRenderButton("ViewMaterialReceipt", userType, "active")) return null;

  return (
    <button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={className}
      title="View"
    >
      <MdOutlineRemoveRedEye className="h-4 w-4" />
    </button>
  );
};
ViewMaterialReceipt.page = "Receipts";
export const EditMaterialReceipt = ({ onClick, className }) => {
  const userType = localStorage.getItem("user_type_id");

  if (!shouldRenderButton("EditMaterialReceipt", userType, "active")) return null;

  return (
    <button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={className}
      title="Edit"
    >
      <MdEdit className="h-4 w-4" />
    </button>
  );
};
EditMaterialReceipt.page = "Receipts";


export const CreateUserButton = ({ onClick, className }) => {
  const userType = localStorage.getItem("user_type_id");

  if (!shouldRenderButton("CreateUserButton", userType, "active")) return null;

  return (
    <Button
        variant="contained" 
               color="inherit"
      onClick={onClick}
      className={className}
      title="Create Roles"
    >
       Create Roles
    </Button>
  );
};
CreateUserButton.page = "UserManagement";
export default {
  AddListItem,
  EditListItem,
  AddVendorItem,
  EditVendorItem,
  AddOccassionItem,
  EditOccassionItem,
  AddPurchase,
  EditPurchase,
  AddConsumption,
  EditConsumption,
  ViewDonor,
  AddDonor,
  AddCashReceipt,
  EditDonor,
  CashReceiptDonor,
  MaterialReceiptDonor,
  FamilyMemberDonor,
  EditDuplicateDonor,
  DeleteDuplicateDonor,
  ViewDonationReceipt,
  EditDonationReceipt,
  EditMaterialReceipt,
  ViewMaterialReceipt,
  CreateUserButton,




  





};
