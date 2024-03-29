/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import {TextControl} from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {useBlockProps} from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
    const blockProps = useBlockProps();
    return (
        <div {...blockProps}>
            <TextControl
                label={"Titolo dell'articolo"}
                value={attributes.title}
                onChange={(val) => setAttributes({title: val})}
            />

            <TextControl
                label={"URL dell'articolo"}
                value={attributes.url}
                onChange={(val) => setAttributes({url: val})}
            />

            <TextControl
                label={"Nome del media"}
                value={attributes.newsPaperName}
                onChange={(val) => setAttributes({newsPaperName: val})}
            />

            <TextControl
                label={"Data dell'articolo"}
                value={attributes.date}
                onChange={(val) => setAttributes({date: val})}
            />
        </div>
    );
}
