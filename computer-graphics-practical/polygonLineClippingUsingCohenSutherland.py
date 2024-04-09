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

def cohen_sutherland(p1, p2, window):
    # Cohen-Sutherland line clipping algorithm implementation
    def compute_outcode(p):
        code = 0
        if p[0] < window[0]:
            code |= 1  # to the left of window
        elif p[0] > window[1]:
            code |= 2  # to the right of window
        if p[1] < window[2]:
            code |= 4  # below window
        elif p[1] > window[3]:
            code |= 8  # above window
        return code

    def clip_segment(p1, p2):
        outcode1 = compute_outcode(p1)
        outcode2 = compute_outcode(p2)

        while True:
            if not (outcode1 | outcode2):  # Trivially accepted
                return p1, p2
            elif outcode1 & outcode2:  # Trivially rejected
                return None
            else:
                # Clip one segment endpoint outside the window
                if outcode1:
                    outcode = outcode1
                else:
                    outcode = outcode2

                if outcode & 1:  # Clip against left edge
                    x = window[0]
                    y = p1[1] + (p2[1] - p1[1]) * (window[0] - p1[0]) / (p2[0] - p1[0])
                elif outcode & 2:  # Clip against right edge
                    x = window[1]
                    y = p1[1] + (p2[1] - p1[1]) * (window[1] - p1[0]) / (p2[0] - p1[0])
                elif outcode & 4:  # Clip against bottom edge
                    y = window[2]
                    x = p1[0] + (p2[0] - p1[0]) * (window[2] - p1[1]) / (p2[1] - p1[1])
                elif outcode & 8:  # Clip against top edge
                    y = window[3]
                    x = p1[0] + (p2[0] - p1[0]) * (window[3] - p1[1]) / (p2[1] - p1[1])

                if outcode == outcode1:
                    p1 = (int(x), int(y))
                    outcode1 = compute_outcode(p1)
                else:
                    p2 = (int(x), int(y))
                    outcode2 = compute_outcode(p2)

    # Clip the line segment against the window
    clipped_segment = clip_segment(p1, p2)
    return clipped_segment

# Clip and plot line segments using Cohen-Sutherland algorithm
for segment in line_segments:
    p1, p2 = segment
    clipped_points = cohen_sutherland(p1, p2, window)
    if clipped_points:
        plt.plot([p1[0], p2[0]], [p1[1], p2[1]], 'g-')
        plt.plot([clipped_points[0][0], clipped_points[1][0]],
                 [clipped_points[0][1], clipped_points[1][1]], 'yo')

plt.title('Polygon and Line Clipping using Cohen-Sutherland Algorithm')
plt.xlabel('X')
plt.ylabel('Y')
plt.grid(True)
plt.gca().set_aspect('equal', adjustable='box')
plt.show()