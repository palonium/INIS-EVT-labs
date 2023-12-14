let selectedElement = null;
let originalPosition = null;
let isDragging = false;
let followMode = false;

const targets = document.querySelectorAll(".target");
for (target in targets){

    target.addEventListener("touchstart", (e) => {
        if (!followMode) {
            followMode = true;
            selectedElement = target;
            originalPosition = {
                top: parseInt(target.style.top) || 0,
                left: parseInt(target.style.left) || 0,
                backgroundColor: target.style.backgroundColor,
            };
            isDragging = true;
            target.style.zIndex = 1;
        }
    } )};

document.addEventListener("touchmove", (e) => {
    if (isDragging && selectedElement && followMode) {
        const newX = e.touches[0].clientX - selectedElement.offsetWidth / 2;
        const newY = e.touches[0].clientY - selectedElement.offsetHeight / 2;

        selectedElement.style.left = `${newX}px`;
        selectedElement.style.top = `${newY}px`;
    }
});

document.addEventListener("touchend", (e) => {
    if (followMode) {
        followMode = false;
    }

    if (selectedElement && isDragging) {
        isDragging = false;
        selectedElement.style.zIndex = 0;
    }

    selectedElement = null;
});

document.addEventListener("touchstart", (e) => {
    if (selectedElement) {
        followMode = true;
    }
});

document.addEventListener("touchend", (e) => {
    if (selectedElement && followMode) {
        isDragging = false;
        followMode = false;
        selectedElement.style.left = `${originalPosition.left}px`;
        selectedElement.style.top = `${originalPosition.top}px`;
        selectedElement.style.zIndex = 0;
        selectedElement.style.backgroundColor = originalPosition.backgroundColor;
        selectedElement = null;
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && selectedElement) {
        selectedElement.style.left = `${originalPosition.left}px`;
        selectedElement.style.top = `${originalPosition.top}px`;
        selectedElement.style.zIndex = 0;
        selectedElement.style.backgroundColor = originalPosition.backgroundColor;
        selectedElement = null;
        isDragging = false;
        followMode = false;
    }
});
