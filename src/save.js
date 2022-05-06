/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {useBlockProps} from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @param {Object} props            Properties passed to the function.
 * @param {Object} props.attributes Available block attributes.
 * @return {JSX.Element} Element to render.
 */
export default function save({attributes}) {
    const blockProps = useBlockProps.save();
    return <div {...blockProps}>
        <div className='columns-container'>
            <a className='column color-box-container left-color-box-container' href={attributes.url}>
            </a>
            <div className='column article-data-container'>
                <div className='newspaper-name'><a>{attributes.newsPaperName}</a></div>
                <div className='newspaper-title'><h1><a href={attributes.url}>{attributes.title}</a></h1></div>
                <div className='newspaper-date'><p>{attributes.date}</p></div>
            </div>
            <a className='column color-box-container right-color-box-container' href={attributes.url}>
            </a>
        </div>
    </div>;
}
