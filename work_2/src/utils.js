export default function getComponentName(Container) {
    return Container.displayName || Container.name || Container
}