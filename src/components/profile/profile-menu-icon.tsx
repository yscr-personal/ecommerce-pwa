import { FaUserCircle } from 'react-icons/fa';

export default function ProfileMenuIcon() {
  const { notifications } = {
    notifications: [],
  };

  return (
    <div className="relative">
      <FaUserCircle size={35} />
      {notifications.length > 0 && (
        <span
          className={`absolute left-0 bottom-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white`}
        >
          {notifications.length}
        </span>
      )}
    </div>
  );
}
