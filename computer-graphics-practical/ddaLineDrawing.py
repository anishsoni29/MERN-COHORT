import matplotlib.pyplot as plt
import numpy as np

def draw_ellipse_dda(rx, ry):
    points = []
    theta = 0
    angle_increment = 0.01  # Adjust for a smoother ellipse

    while theta <= 2 * np.pi:
        x = rx * np.cos(theta)
        y = ry * np.sin(theta)
        points.append((round(x), round(y)))
        theta += angle_increment

    return points

# Example usage
rx, ry = 100, 50

ellipse_points = draw_ellipse_dda(rx, ry)

# Plotting
x_values, y_values = zip(*ellipse_points)
plt.plot(x_values, y_values, marker='o', linestyle='-', color='b')
plt.title('DDA Ellipse Drawing')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.grid(True)
plt.show()