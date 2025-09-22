function addImg() {
  const imageInput = document.getElementById("imgInput").value;
  if (imageInput) {
    const gallery = document.getElementById("imgGallery");

    const galleryItem = document.createElement("div");
    galleryItem.classList.add("relative", "m-10");

    const img = document.createElement("img");
    img.classList.add(
      "max-w-[200px]",
      "max-h-[200px]",
      "cursor-pointer",
      "transition-transform",
      "hover:scale-105"
    );
    img.src = imageInput;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add(
      "bg-red-600",
      "text-white",
      "px-4",
      "py-2",
      "rounded",
      "text-center",
      "hover:bg-red-700",
      "transition-colors",
      "m-2"
    );
    removeButton.onclick = () => gallery.removeChild(galleryItem);

    galleryItem.appendChild(img);
    galleryItem.appendChild(removeButton);
    gallery.appendChild(galleryItem);

    document.getElementById("imgInput").value = "";
  } else {
    alert("Please enter an image URL.");
  }
}

document.getElementById("addImgButton").addEventListener("click", addImg);
