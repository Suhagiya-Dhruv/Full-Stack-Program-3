## Animation

In CSS, animations allow you to gradually change an element's style over a set duration of time, creating dynamic and visually appealing effects. Here's an overview of how to use animations in CSS:

### Keyframes

Animations are defined using `@keyframes` rule, which specifies the style changes that occur over the course of the animation. Keyframes are defined using percentages (from 0% to 100%) or specific time values.

Example:
```css
@keyframes slide-in {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
}
```

### Animation Properties

To apply an animation to an element, you use the `animation` property. This property allows you to specify various animation-related properties, including the name of the keyframes, duration, timing function, delay, and iteration count.

Example:
```css
.element {
    animation-name: slide-in;
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: infinite;
}
```

### Shorthand Animation Property

You can also use the shorthand `animation` property to specify all animation-related properties in a single declaration.

Example:
```css
.element {
    animation: slide-in 2s ease 0s infinite;
}
```

### Animation Timing Function

The `animation-timing-function` property specifies the speed curve of the animation. It defines how the animation progresses over time.

Common timing functions include:
- `ease`: Default value, starts slow, then speeds up, then slows down again.
- `linear`: Animation progresses at a constant speed.
- `ease-in`: Starts slow and speeds up.
- `ease-out`: Starts fast and slows down.
- `ease-in-out`: Starts slow, speeds up, then slows down.

### Animation Delay

The `animation-delay` property specifies the delay before the animation starts. It allows you to control when the animation begins after it is applied to an element.

### Animation Iteration Count

The `animation-iteration-count` property specifies the number of times an animation should be played. It can be set to a specific number or to `infinite` for indefinite playback.

### Animation Direction

The `animation-direction` property specifies whether the animation should play forwards, backwards, alternate between forwards and backwards, or alternate between forwards and backwards each cycle.

### Animation Fill Mode

The `animation-fill-mode` property specifies what styles are applied to an element when the animation is not playing (before it starts, after it ends, or both).

Animations in CSS provide a powerful way to add movement and interactivity to your web pages, enhancing the user experience.
