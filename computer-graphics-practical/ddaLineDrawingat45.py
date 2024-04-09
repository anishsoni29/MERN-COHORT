import matplotlib.pyplot as plt
import numpy as np

def draw_line_dda_angle(x1, y1, length, angle_degrees):
    angle_radians = np.radians(angle_degrees)  # Convert degrees to radians
    x2 = x1 + length * np.cos(angle_radians)
    y2 = y1 + length * np.sin(angle_radians)

    dx = x2 - x1
    dy = y2 - y1
    steps = int(max(abs(dx), abs(dy)))  # Explicitly convert to integer

    x_increment = dx / steps
    y_increment = dy / steps

    x, y = x1, y1
    points = [(round(x), round(y))]

    for _ in range(steps):
        x += x_increment
        y += y_increment
        points.append((round(x), round(y)))

    return points

# Example usage
x1, y1 = 0, 0
length = 100
angle_degrees = 45  # Angle of the line

line_points = draw_line_dda_angle(x1, y1, length, angle_degrees)

# Plotting
x_values, y_values = zip(*line_points)
plt.plot(x_values, y_values, marker='o', linestyle='-', color='b')
plt.title(f'DDA Line Drawing at {angle_degrees} degrees')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.grid(True)
plt.show()