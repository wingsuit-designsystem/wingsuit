import { Meta } from '@storybook/addon-docs';
import { Badge } from '@storybook/components';
import { storage } from '@wingsuit-designsystem/pattern';
import LinkTo from '@storybook/addon-links/react';
import './images/background.png';
import './images/ws-tokens.svg';
import './images/ws-atoms.svg';
import './images/ws-molecules.svg';
import './images/ws-organisms.svg';
import './images/ws-templates.svg';
export const namespaces = {
  docs: {
    Blocks: {
      icon: 'images/ws-atoms.svg'
    },
    Section: {
      icon: 'images/ws-molecules.svg'
    }
  },
  default: {
    atoms: {
      icon: 'images/ws-atoms.svg'
    },
    molecules: {
      icon: 'images/ws-molecules.svg'
    },
    organisms: {
      icon: 'images/ws-organisms.svg'
    },
    templates: {
      icon: 'images/ws-templates.svg'
    }
  }
}
export const mode = process.env.STORYBOOK_DOCS === 'true' ? 'docs' : 'default';

import './load-patterns';


<Meta title="Foundations/Welcome"
      parameters={{ viewMode: 'docs', previewTabs: { canvas: { hidden: true }}}}
/>

<div style={{backgroundColor: '#115E59', margin: 'auto', position: 'relative', marginBottom: '40px'}}>
  <img src="images/background.png" style={{ width: '100%', zIndex: '-2', position: 'relative' }}/>
  <img src="images/logo.svg" style={{margin: 'auto', maxWidth: '400px', position: 'absolute', bottom: 0, top: 0, left: 0, right: 0}}/>
</div>


# Design system

Wingsuit demo page with components from <a href="https://mertjf.github.io/tailblocks/" target="_blank">Tailblocks</a> and <a href="https://www.tailwindtoolbox.com" target="_blank"> tailwindtoolbox.com</a>.

Design and images from <a href="https://www.drawkit.io/product/peach-illustration-system" target="_blank">drawkit</a>.



<div style={{paddingTop: '40px'}}>
  {
    <div>
      {
        Object.keys(namespaces[mode]).map((namespace, i) => {
          const config = namespaces[mode][namespace];
          return (
            <div key={namespace}>
              <h2 class="flex flex-row"> <img src={config.icon} style={{width: '20px', marginRight: '16px'}}/> {namespace} </h2>
              <div style={{marginBottom: '34px'}}>
                {
                  storage.loadPatternsByNamespace(namespace).map((pattern)=>{

                    if (mode === 'docs') {
                      return (
                        <div style={{marginBottom: '24px'}} key={pattern.getId()}>
                          <LinkTo story={pattern.getDefaultVariant().getLabel()} kind={`${pattern.getNamespace()}-${pattern.getId()}`}>
                            <div style={{display: 'flex', width: '100%'}}>
                              <div style={{width: '20%'}}><img src={pattern.getIconPath()}/></div>
                              <div class="prose" style={{width: '80%', paddingLeft: '12px'}}>
                                <h3>{pattern.getLabel()}</h3>
                                <div>{pattern.getDescription()}</div>
                              </div>
                            </div>
                          </LinkTo>
                        </div>
                      )
                    } else {
                      return (
                        <LinkTo key={pattern.getId()} story={pattern.getDefaultVariant().getLabel()} kind={`${pattern.getNamespace()}-${pattern.getId()}`}>
                          <Badge status="neutral" style={{marginRight: '8px'}}>{pattern.getLabel()}</Badge>
                        </LinkTo>
                      )
                    }
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  }
</div>
