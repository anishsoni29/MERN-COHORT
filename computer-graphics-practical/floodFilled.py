import matplotlib.pyplot as plt
import numpy as np

def flood_fill(image, start_point, fill_color, boundary_color):
    stack = [start_point]

    while stack:
        x, y = stack.pop()

        if image[y, x] != boundary_color and image[y, x] != fill_color:
            image[y, x] = fill_color

            # Check and add neighboring pixels
            neighbors = [(x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)]
            for nx, ny in neighbors:
                if 0 <= nx < image.shape[1] and 0 <= ny < image.shape[0]:
                    stack.append((nx, ny))

    return image

# Example usage
# Create a sample image
image_size = 50
image = np.zeros((image_size, image_size), dtype=np.uint8)

# Set boundary pixels
image[:, 0] = 255
image[:, -1] = 255
image[0, :] = 255
image[-1, :] = 255

# Define fill parameters
start_point = (25, 25)  # Start point within the boundary
fill_color = 150
boundary_color = 255

# Perform flood fill
flood_filled_image = flood_fill(image.copy(), start_point, fill_color, boundary_color)

# Plot the original and flood filled images
plt.figure(figsize=(8, 4))
plt.subplot(1, 2, 1)
plt.imshow(image, cmap='gray')
plt.title('Original Image')
plt.subplot(1, 2, 2)
plt.imshow(flood_filled_image, cmap='gray')
plt.title('Flood Filled Image')
plt.show()