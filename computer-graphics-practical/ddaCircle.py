# Code to draw the circle using DDA

import matplotlib.pyplot as plt
import numpy as np

def draw_circle(center_x, center_y, radius):
    theta = np.linspace(0, 2*np.pi, 100)
    x = center_x + radius * np.cos(theta)
    y = center_y + radius * np.sin(theta)

    plt.plot(x, y, label='Circle')
    plt.title('Circle Drawing')
    plt.xlabel('X-axis')
    plt.ylabel('Y-axis')
    plt.axis('equal')  # Ensure that the aspect ratio is equal for a perfect circle
    plt.legend()
    plt.grid(True)
    plt.show()

# Example usage
center_x, center_y = 3, 3
radius = 2

draw_circle(center_x, center_y, radius)