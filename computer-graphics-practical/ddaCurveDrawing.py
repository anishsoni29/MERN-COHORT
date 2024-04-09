import matplotlib.pyplot as plt


def draw_curve_dda(x1, y1, x2, y2, x3, y3):
    points = []

    t = 0
    while t <= 1:
        x = (1 - t) ** 2 * x1 + 2 * (1 - t) * t * x2 + t ** 2 * x3
        y = (1 - t) ** 2 * y1 + 2 * (1 - t) * t * y2 + t ** 2 * y3
        points.append((round(x), round(y)))
        t += 0.01  # Adjust for a smoother curve

    return points


# Example usage
x1, y1 = 0, 0
x2, y2 = 50, 100
x3, y3 = 100, 0

curve_points = draw_curve_dda(x1, y1, x2, y2, x3, y3)

# Plotting
x_values, y_values = zip(*curve_points)
plt.plot(x_values, y_values, marker='o', linestyle='-', color='b')
plt.title('DDA Curve Drawing')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.grid(True)
plt.show()