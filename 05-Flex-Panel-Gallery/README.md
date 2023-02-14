# 05 - Flex Panel Gallery
![](./screenshot4.jpg)

## Main goals

- Make a flex gallery using predominantly CSS with JS

## Learning Notes
# Flex
I feel quite comfortable with the basic fundamentals of flex box (flex-direction, align-items, justify-content etc), so I'm ready to progress to these slightly less-basic uses.

Giving the child components (in this case, individual panels) a flex of 1, it tells them to spread evenly across the space.
``` css
// parent container
.panels {
    display: flex;
}

// child, of which there is 5
.panel {
    flex: 1;
}
```

When the panel is open, it's given a class with a flex of 5. This means it gives itself 5 times the amount of room than the rest of them.


# 