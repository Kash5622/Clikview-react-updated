import React,{useState,useEffect} from 'react'
import flvjs from 'flv.js';
import hlsjs from 'hls.js';
import 'mediaelement';
import 'mediaelement/build/mediaelementplayer.min.css';
import 'mediaelement/build/mediaelement-flash-video.swf';


function MediaElement(props) {
    const [state,setState]=useState()
    // success(media, node, instance) {
    //     // Your action when media was successfully loaded
    // }

    // error(media) {
    //     // Your action when media had an error loading
    // }
    const
            
            sources = JSON.parse(props.sources),
            tracks = JSON.parse(props.tracks),
            sourceTags = [],
            tracksTags = []
            ;

        for (let i = 0, total = sources.length; i < total; i++) {
            const source = sources[i];
            sourceTags.push(`<source src="${source.src}" type="${source.type}">`);
        }

        for (let i = 0, total = tracks.length; i < total; i++) {
            const track = tracks[i];
            tracksTags.push(`<track src="${track.src}" kind="${track.kind}" srclang="${track.lang}"${(track.label ? ` label=${track.label}` : '')}>`);
        }

        const
            mediaBody = `${sourceTags.join("\n")}
				${tracksTags.join("\n")}`,
            mediaHtml = 
                `<video id="${props.id}" width="${props.width}" height="${props.height}"${(props.poster ? ` poster=${props.poster}` : '')}
					${(props.controls ? ' controls' : '')}${(props.preload ? ` preload="${props.preload}"` : '')}>
					${mediaBody}
				</video>` 
            ;
        useEffect(() => {
            const { MediaElementPlayer } = global;

            if (!MediaElementPlayer) {
                return;          
            }
    
            const options = Object.assign({}, JSON.parse(props.options), {
                // Read the Notes below for more explanation about how to set up the path for shims
                pluginPath: './static/media/',
                // success: (media, node, instance) => success(media, node, instance),
                // error: (media, node) => error(media, node)
            });
    
            window.flvjs = flvjs;
            window.Hls = hlsjs;
            let player;
            setState({ player: new MediaElementPlayer(props.id, options) });
        
          return () => {
            // if (state.player) {
            //     state.player.remove();
            //     setState({ player: null });
            // }
          }
        }, [state,props.options,props.id])
        
    return (
        <div dangerouslySetInnerHTML={{ __html: mediaHtml }}>

        </div>
    );
}

export default MediaElement;
