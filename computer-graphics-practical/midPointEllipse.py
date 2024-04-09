import matplotlib.pyplot as plt

def midpoint_ellipse(rx, ry):
    x = 0
    y = ry
    dx = 0
    dy = 2 * rx * rx * y

    # Initial decision parameter of region 1
    d1 = (ry * ry) - (rx * rx * ry) + (0.25 * rx * rx)

    # For region 1
    while dx < dy:
        plt.scatter(x + rx, y)
        plt.scatter(-x + rx, y)
        plt.scatter(-x + rx, -y)
        plt.scatter(x + rx, -y)

        if d1 < 0:
            x += 1
            dx += 2 * (ry * ry)
            d1 += dx + (ry * ry)
        else:
            x += 1
            y -= 1
            dx += 2 * (ry * ry)
            dy -= 2 * (rx * rx)
            d1 += dx - dy + (ry * ry)

    # Decision parameter of region 2
    d2 = ((ry * ry) * ((x + 0.5) * (x + 0.5))) + ((rx * rx) * ((y - 1) * (y - 1))) - (rx * rx * ry * ry)

    # For region 2
    while y >= 0:
        plt.scatter(x + rx, y)
        plt.scatter(-x + rx, y)
        plt.scatter(-x + rx, -y)
        plt.scatter(x + rx, -y)

        if d2 > 0:
            y -= 1
            dy -= 2 * (rx * rx)
            d2 += (rx * rx) - dy
        else:
            y -= 1
            x += 1
            dx += 2 * (ry * ry)
            dy -= 2 * (rx * rx)
            d2 += dx - dy + (rx * rx)

# Example usage
rx = 6
ry = 4
midpoint_ellipse(rx, ry)

plt.gca().set_aspect('equal', adjustable='box')
plt.title('Midpoint Ellipse Algorithm')
plt.xlabel('X')
plt.ylabel('Y')
plt.grid(True)
plt.show()