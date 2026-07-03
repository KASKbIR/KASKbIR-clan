function ImageViewer({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      className="imageViewer"
      onClick={onClose}
    >
      <div
        className="imageViewerContent"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="viewerClose"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src={image}
          alt="Preview"
          className="viewerImage"
        />
      </div>
    </div>
  );
}

export default ImageViewer;