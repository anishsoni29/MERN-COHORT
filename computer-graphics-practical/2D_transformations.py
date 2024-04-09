import cv2
import numpy as np

# Load your image
image = cv2.imread('image.jpg')

# Translation matrix
tx, ty = 100, 50  # Translate by 100 in x and 50 in y
translation_matrix = np.array([[1, 0, tx], [0, 1, ty]], dtype=float)

# Rotation matrix
angle = 30  # Rotate by 30 degrees
rotation_point = (image.shape[1]//2, image.shape[0]//2)  # Rotate around the center of the image
rotation_matrix = cv2.getRotationMatrix2D(rotation_point, angle, 1)

# Scaling matrix
sx, sy = 1.5, 0.5  # Scale by 1.5 in x and 0.5 in y
scaling_matrix = np.array([[sx, 0, 0], [0, sy, 0]], dtype=float)

# Reflection matrices
reflection_matrix_x = np.array([[-1, 0, image.shape[1]], [0, 1, 0]], dtype=float)  # Reflect over y-axis
reflection_matrix_y = np.array([[1, 0, 0], [0, -1, image.shape[0]]], dtype=float)  # Reflect over x-axis

# Shearing matrices
shear_x = 0.2  # Shear horizontally
shear_y = 0.2  # Shear vertically
shearing_matrix_x = np.array([[1, shear_x, 0], [0, 1, 0]], dtype=float)
shearing_matrix_y = np.array([[1, 0, 0], [shear_y, 1, 0]], dtype=float)

# Apply transformations
translated_image = cv2.warpAffine(image, translation_matrix, (image.shape[1], image.shape[0]))
rotated_image = cv2.warpAffine(image, rotation_matrix, (image.shape[1], image.shape[0]))
scaled_image = cv2.warpAffine(image, scaling_matrix, (int(image.shape[1] * sx), int(image.shape[0] * sy)))
reflected_image_x = cv2.warpAffine(image, reflection_matrix_x, (image.shape[1], image.shape[0]))
reflected_image_y = cv2.warpAffine(image, reflection_matrix_y, (image.shape[1], image.shape[0]))
sheared_image_x = cv2.warpAffine(image, shearing_matrix_x, (image.shape[1], image.shape[0]))
sheared_image_y = cv2.warpAffine(image, shearing_matrix_y, (image.shape[1], image.shape[0]))

# ... (rest of your transformation code)

# Display the original and transformed images
cv2.imshow('Original Image', image)
cv2.imshow('Translated Image', translated_image)
cv2.imshow('Rotated Image', rotated_image)
cv2.imshow('Scaled Image', scaled_image)
cv2.imshow('Reflected Image over X', reflected_image_x)
cv2.imshow('Reflected Image over Y', reflected_image_y)
cv2.imshow('Sheared Image X', sheared_image_x)
cv2.imshow('Sheared Image Y', sheared_image_y)

# Wait for a key press and then close all the windows
cv2.waitKey(0)
cv2.destroyAllWindows()