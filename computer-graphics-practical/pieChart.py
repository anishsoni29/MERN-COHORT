import matplotlib.pyplot as plt
import numpy as np

def draw_pie_chart(data, labels, chart_title):
    total = sum(data)
    percentages = [(val / total) * 100 for val in data]

    fig, ax = plt.subplots()
    ax.pie(data, labels=labels, autopct='%1.1f%%')

    ax.set_title(chart_title)
    ax.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle

    # Add labels outside the boundary of the pie chart near the corresponding pie section
    for i, (percent, label) in enumerate(zip(percentages, labels)):
        angle = 2 * np.pi * (sum(percentages[:i]) + percent / 2) / 100
        x = 1.2 * np.cos(angle)
        y = 1.2 * np.sin(angle)
        ha = 'center' if np.cos(angle) < 0 else 'left'  # Adjust horizontal alignment based on quadrant
        plt.text(x, y, f'{label}: {percent:.1f}%', ha=ha, va='center')

    plt.show()

# Example data
data = [30, 20, 10, 40]  # Data distribution over intervals
labels = ['Interval 1', 'Interval 2', 'Interval 3', 'Interval 4']
chart_title = 'Distribution of Data over Intervals'

# Draw the pie chart
draw_pie_chart(data, labels, chart_title)