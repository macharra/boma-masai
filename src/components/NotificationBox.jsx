const NotificationBox = ({ header, message, onClose, type = 'success' }) => {
  const typeStyles = {
    success: 'text-green-600',
    error: 'text-red-600',
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto transition-all duration-300">
        <h2 className={`font-serif text-2xl font-semibold mb-4 ${typeStyles[type]}`}>
          {header}
        </h2>
        <p className="font-body text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className={`bg-${type === 'success' ? 'green' : 'red'}-600 text-white px-4 py-2 rounded hover:bg-${type === 'success' ? 'green' : 'red'}-700 transition duration-300`}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NotificationBox;
