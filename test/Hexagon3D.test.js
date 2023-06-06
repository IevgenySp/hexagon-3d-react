import renderer from 'react-test-renderer';
import Hexagon3D from '../dist/Hexagon3D.js';

it('Hexagon3D to be defined', () => {
    const component = renderer.create(
        <Hexagon3D />,
    );

    expect(component).toBeDefined();
});

it('Hexagon3D have all 8 faces', () => {
    const component = renderer.create(
        <Hexagon3D />,
    );

    expect(component.toJSON().children?.length).toEqual(8);
});