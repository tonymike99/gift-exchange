import FingerprintIcon from "@mui/icons-material/Fingerprint";
import BadgeIcon from "@mui/icons-material/Badge";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user);
  const { _id, name, email, created, image } = user.data;

  return (
    <main className="p-6 flex flex-col md:flex-row gap-8 justify-center items-center">
      <img src={image} alt="" className="rounded-full border w-32" />
      <div className="flex flex-col gap-4">
        <p>
          <span className="font-bold mr-2">
            <FingerprintIcon /> Id:
          </span>
          {_id}
        </p>
        <p>
          <span className="font-bold mr-2">
            <BadgeIcon /> Name:
          </span>
          {name}
        </p>
        <p>
          <span className="font-bold mr-2">
            <EmailIcon /> Email:
          </span>
          {email}
        </p>
        <p>
          <span className="font-bold mr-2">
            <CalendarMonthIcon /> Joined Date:
          </span>
          {created?.slice(0, 10)}
        </p>
      </div>
    </main>
  );
}

export default Profile;
