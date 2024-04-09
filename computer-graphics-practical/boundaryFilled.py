import matplotlib.pyplot as plt
import numpy as np

def boundary_fill_iterative(image, x, y, fill_color, boundary_color):
    stack = [(x, y)]
    while stack:
        x, y = stack.pop()
        if x < 0 or x >= len(image) or y < 0 or y >= len(image[0]):
            continue
        if image[x][y] == boundary_color or image[x][y] == fill_color:
            continue
        image[x][y] = fill_color
        stack.extend([(x+1, y), (x-1, y), (x, y+1), (x, y-1)])

def plot_image(image, title):
    plt.imshow(image, cmap='nipy_spectral')
    plt.title(title)
    plt.axis('off')

# Initialize the image
size = 100  # Image size for better visualization
image = np.zeros((size, size))

# Draw a simple boundary (a rectangle in this case)
image[10:size-10, 10] = 1  # Left boundary
image[10:size-10, size-11] = 1  # Right boundary
image[10, 10:size-10] = 1  # Top boundary
image[size-11, 10:size-10] = 1  # Bottom boundary

# Display the original image
plt.figure(figsize=(12, 6))
plt.subplot(1, 2, 1)
plot_image(image, 'Original Image')

# Apply Boundary Fill algorithm iteratively
boundary_fill_iterative(image, 50, 50, 2, 1)  # Fill from the center

# Display the image after applying Boundary Fill
plt.subplot(1, 2, 2)
plot_image(image, 'Image After Boundary Fill')

plt.show()