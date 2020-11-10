import React from 'react';
import AttachmentStyle from './AttachmentContainer.module.scss';

const AttachmentContainer = ({
    url, 
    alt,
    title,
    subtitle
}) => {
    return (
        <div className={AttachmentStyle.attachmentContainer}>
            <img
                className={AttachmentStyle.attachmentPreview}
                src={url}
                alt={alt}
            />
            {(title || subtitle) ? 
                <div class={AttachmentStyle.description}>
                    <div className={AttachmentStyle.title}>
                        {title}
                    </div>
                    <div className={AttachmentStyle.subtitle}>
                        {subtitle}
                    </div>
                </div>
                :
                null
            }
        </div>
    );
}

export default AttachmentContainer;
