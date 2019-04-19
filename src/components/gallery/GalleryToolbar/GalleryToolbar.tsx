import * as React from "react";
import { PlayIcon, PauseIcon, StepForwardIcon, StepBackwardIcon, ExpandIcon, CompressIcon, InfoCircleIcon, DownloadIcon } from "@patternfly/react-icons";
import { Grid, GridItem, Button, GalleryItem } from "@patternfly/react-core";
import { galleryActions, IGalleryState } from "../../../api/models/gallery.model";
import "./GalleryToolbar.scss";
type AllProps = {
    index: number;
    total: number;
    onToolbarClick: (action: string) => void;  // Description: switch play/pause functionality
} & IGalleryState;

const GalleryToolbar: React.FunctionComponent<AllProps> = (props: AllProps) => {

    return (
        <Grid className="gallery-toolbar">
            <GridItem sm={12} md={7}>
                {
                    (props.total > 1) &&
                    <div>
                        <Button variant="link"
                            onClick={() => props.onToolbarClick(galleryActions.previous)} >
                            <StepBackwardIcon />
                        </Button>
                        <Button variant="link"
                            onClick={() => props.onToolbarClick(props.isPlaying ? galleryActions.pause : galleryActions.play)} >
                            {
                                props.isPlaying ? <PauseIcon size="md" /> : <PlayIcon size="md" />
                            }
                        </Button>
                        <Button variant="link"
                            onClick={() => props.onToolbarClick(galleryActions.next)} >
                            <StepForwardIcon />
                        </Button>
                        <span>{ props.index + 1} / { props.total} </span>
                    </div>
                }
            </GridItem>
            <GridItem sm={12} md={5}>
                <Button variant="link"
                    onClick={() => props.onToolbarClick(galleryActions.fullscreen)}  >
                    {props.isFullscreen ? <CompressIcon size="md" /> : <ExpandIcon />}
                </Button>
                <Button variant="link"
                    onClick={() => props.onToolbarClick(galleryActions.download)}  >
                    <DownloadIcon />
                </Button>
                <Button variant="link"
                    onClick={() => props.onToolbarClick(galleryActions.information)}  >
                    <InfoCircleIcon />
                </Button>
            </GridItem>
        </Grid>
    )
}
export default React.memo(GalleryToolbar);
