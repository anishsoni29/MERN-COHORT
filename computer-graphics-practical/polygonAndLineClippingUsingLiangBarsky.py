import matplotlib.pyplot as plt

# Define the polygon vertices
polygon_vertices = [(1, 1), (3, 6), (6, 5), (5, 2), (2, 2)]

# Define the window (xmin, xmax, ymin, ymax)
window = (2, 5, 3, 6)

# Plot the polygon and window
for i in range(len(polygon_vertices)):
    plt.plot([polygon_vertices[i][0], polygon_vertices[(i + 1) % len(polygon_vertices)][0]],
             [polygon_vertices[i][1], polygon_vertices[(i + 1) % len(polygon_vertices)][1]], 'b-')
plt.plot([window[0], window[1], window[1], window[0], window[0]],
         [window[2], window[2], window[3], window[3], window[2]], 'r-')

# Define line segments for testing line clipping
line_segments = [((0, 0), (4, 4)), ((2, 1), (5, 6)), ((3, 4), (7, 3))]

def liang_barsky(p1, p2, window):
    x0, y0 = p1
    x1, y1 = p2
    dx = x1 - x0
    dy = y1 - y0
    p = [-dx, dx, -dy, dy]
    q = [x0 - window[0], window[1] - x0, y0 - window[2], window[3] - y0]
    u1 = 0
    u2 = 1

    for i in range(4):
        if p[i] == 0:
            if q[i] < 0:
                return None
        else:
            t = q[i] / p[i]
            if p[i] < 0:
                u1 = max(u1, t)
            else:
                u2 = min(u2, t)

    if u1 > u2:
        return None
    else:
        clipped_p1 = (x0 + u1 * dx, y0 + u1 * dy)
        clipped_p2 = (x0 + u2 * dx, y0 + u2 * dy)
        return clipped_p1, clipped_p2

# Clip and plot line segments using Liang-Barsky algorithm
for segment in line_segments:
    p1, p2 = segment
    clipped_points = liang_barsky(p1, p2, window)
    if clipped_points:
        plt.plot([p1[0], p2[0]], [p1[1], p2[1]], 'g-')
        plt.plot([clipped_points[0][0], clipped_points[1][0]],
                 [clipped_points[0][1], clipped_points[1][1]], 'yo')

plt.title('Polygon and Line Clipping using Liang-Barsky Algorithm')
plt.xlabel('X')
plt.ylabel('Y')
plt.grid(True)
plt.gca().set_aspect('equal', adjustable='box')
plt.show()