import matplotlib.pyplot as plt


def draw_line_dda(x1, y1, x2, y2):
    dx = x2 - x1
    dy = y2 - y1
    steps = abs(dx) if abs(dx) > abs(dy) else abs(dy)
    x_increment = dx / float(steps)
    y_increment = dy / float(steps)
    x = x1
    y = y1
    for _ in range(int(steps)):
        plt.scatter(round(x), round(y))
        x += x_increment
        y += y_increment


def draw_bar_graph(data_points, x_labels, y_label):
    num_points = len(data_points)
    max_y = max(data_points)

    # Define figure size based on the screen resolution
    screen_resolution = plt.gcf().get_size_inches() * plt.gcf().dpi
    width, height = screen_resolution[0], screen_resolution[1]

    plt.figure(figsize=(width / 100, height / 100))
    plt.xlabel('X')
    plt.ylabel(y_label)
    plt.title('Bar Graph')

    # Calculate the width of each bar and the gap between bars
    bar_width = width / (num_points * 2)
    gap_width = width / (num_points * 4)

    for i in range(num_points):
        x = (2 * i + 1) * gap_width + i * bar_width
        y = (data_points[i] / max_y) * (height - 100)  # Scale the data points to fit the screen
        draw_line_dda(x, 50, x, y)
        draw_line_dda(x, y, x + bar_width, y)
        draw_line_dda(x + bar_width, y, x + bar_width, 50)
        plt.text(x + bar_width / 2, 30, x_labels[i], ha='center')

    plt.show()


# Sample data
data_points = [30, 50, 70, 90, 110]
x_labels = ['A', 'B', 'C', 'D', 'E']
y_label = 'Frequency'

draw_bar_graph(data_points, x_labels, y_label)