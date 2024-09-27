const NotificationBox = ({ header, message, onClose, type = 'success' }) => {
  const typeStyles = {
    success: 'text-green-600',
    error: 'text-red-600',
  };

  const buttonColor = type === 'success' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700';

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto transition-transform transform duration-500 ease-in-out">
        <h2 className={`font-serif text-2xl font-semibold mb-4 ${typeStyles[type]}`}>
          {header}
        </h2>
        <p className="font-body text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className={`text-white px-4 py-2 rounded transition duration-300 ${buttonColor}`}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NotificationBox;
