import React, { useState } from "react";

const ImageUpload: React.FC = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />
      {image && (
        <img
          src={image as string}
          alt="Preview"
          className="h-64 w-64 rounded border object-cover"
        />
      )}
    </div>
  );
};

export default ImageUpload;
