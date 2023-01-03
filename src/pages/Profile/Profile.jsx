import FingerprintIcon from "@mui/icons-material/Fingerprint";
import BadgeIcon from "@mui/icons-material/Badge";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function Profile() {
  return (
    <main className="p-6 flex flex-col md:flex-row gap-8 items-center">
      <img src="" alt="" className="rounded-full border w-1/2" />
      <div className="flex flex-col gap-4">
        <p>
          <span className="font-bold mr-2">
            <FingerprintIcon /> Id:
          </span>
          12345
        </p>
        <p>
          <span className="font-bold mr-2">
            <BadgeIcon /> Name:
          </span>
          Tony
        </p>
        <p>
          <span className="font-bold mr-2">
            <EmailIcon /> Email:
          </span>
          tonymike99@gmail.com
        </p>
        <p>
          <span className="font-bold mr-2">
            <CalendarMonthIcon /> Joined Date:
          </span>
          01/01/2023
        </p>
      </div>
    </main>
  );
}

export default Profile;
