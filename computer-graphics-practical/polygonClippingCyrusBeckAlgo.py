import matplotlib.pyplot as plt
import numpy as np

# Define the polygon vertices
polygon_vertices = np.array([[1, 1], [3, 6], [6, 5], [5, 2], [2, 2]])

# Define the window (xmin, xmax, ymin, ymax)
window = (2, 5, 3, 6)

# Plot the polygon and window
plt.plot(polygon_vertices[:, 0], polygon_vertices[:, 1], 'b-')
plt.plot([window[0], window[1], window[1], window[0], window[0]],
         [window[2], window[2], window[3], window[3], window[2]], 'r-')

# Define line segments for testing line clipping
line_segments = [((0, 0), (4, 4)), ((2, 1), (5, 6)), ((3, 4), (7, 3))]


def cyrus_beck(p1, p2, window):
    # Cyrus-Beck line clipping algorithm implementation
    N = np.array([0, 1])  # Normal vector to the window
    D = np.array([0, -1])  # Direction vector
    P1 = np.array(p1)
    P2 = np.array(p2)

    Q1 = np.dot((P1 - window[:2]), N)
    Q2 = np.dot((P2 - window[:2]), N)
    t1 = Q1 / (Q1 - Q2)
    t2 = Q2 / (Q2 - Q1)

    if Q1 * Q2 < 0 and t1 >= 0 and t1 <= 1 and t2 >= 0 and t2 <= 1:
        return (P1 + t1 * (P2 - P1)).tolist(), (P2 + t2 * (P1 - P2)).tolist()
    else:
        return None


# Clip and plot line segments using Cyrus-Beck algorithm
for segment in line_segments:
    p1, p2 = segment
    clipped_points = cyrus_beck(p1, p2, window)
    if clipped_points:
        plt.plot([p1[0], p2[0]], [p1[1], p2[1]], 'g-')
        plt.plot([clipped_points[0][0], clipped_points[1][0]],
                 [clipped_points[0][1], clipped_points[1][1]], 'yo')

plt.title('Polygon and Line Clipping using Cyrus-Beck Algorithm')
plt.xlabel('X')
plt.ylabel('Y')
plt.grid(True)
plt.gca().set_aspect('equal', adjustable='box')
plt.show()