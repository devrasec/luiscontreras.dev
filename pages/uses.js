import { NextSeo } from 'next-seo';
import Container from '../components/container';
import Heading from '../components/primitives/heading';
import Link from '../components/primitives/link';
import config from '../config/website';

export default function ContactPage() {
  return (
    <>
      <NextSeo title="Uses" canonical={`${config.siteUrl}/uses`} />
      <Container as="main" role="main">
        <Heading textColor="primary">Uses</Heading>

        <p>
          Here you will find{' '}
          <em>
            <strong>"everything"</strong>
          </em>{' '}
          I use as a developer...
        </p>

        <Heading as="h2" looksLike="h4" textColor="secondary">
          Code Editor & Terminal
        </Heading>

        <ul>
          <li>
            <Link to="https://code.visualstudio.com/">Visual Studio Code</Link> is my code editor of
            choice since 2016.
          </li>

          <li>
            I use{' '}
            <Link to="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl">
              Night Owl
            </Link>{' '}
            color theme by <Link to="https://twitter.com/sarah_edo">Sarah Drasner</Link>.
          </li>

          <li>
            I'm currently using <Link to="https://www.iterm2.com/">iTerm2</Link> as my terminal +{' '}
            <Link to="https://ohmyz.sh/">Oh my zsh</Link> and{' '}
            <Link to="https://denysdovhan.com/spaceship-prompt/">Spaceship</Link>.
          </li>

          <li>
            The font I use is{' '}
            <Link to="https://github.com/microsoft/cascadia-code">Cascadia Code</Link>.
          </li>
        </ul>

        <Heading as="h2" looksLike="h4" textColor="secondary">
          VS Code Extensions
        </Heading>

        <p>I use a lot of extensions for VS Code, but these are the most useful for me.</p>

        <ul>
          <li>
            <Link to="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag">
              Auto Rename Tag
            </Link>
          </li>
          <li>
            <Link to="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets">
              ES7 React/Redux/GraphQL/React-Native snippets
            </Link>
          </li>
          <li>
            <Link to="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">
              ESLint
            </Link>
          </li>
          <li>
            <Link to="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens">
              GitLens
            </Link>
          </li>
          <li>
            <Link to="https://marketplace.visualstudio.com/items?itemName=xyz.local-history">
              Local History
            </Link>
          </li>
          <li>
            <Link to="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl">
              Night Owl
            </Link>
          </li>
          <li>
            <Link to="https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script">
              npm
            </Link>
          </li>
          <li>
            <Link to="https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense">
              npm Intellisense
            </Link>
          </li>
          <li>
            <Link to="https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense">
              Path Intellisense
            </Link>
          </li>
          <li>
            <Link to="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">
              Prettier
            </Link>
          </li>
          <li>
            <Link to="https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets">
              Rainbow Brackets
            </Link>
          </li>
          <li>
            <Link to="https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode">
              Visual Studio IntelliCode
            </Link>
          </li>
          <li>
            <Link to="https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker">
              Docker
            </Link>
          </li>
        </ul>

        <Heading as="h2" looksLike="h4" textColor="secondary">
          Chrome Extensions
        </Heading>

        <ul>
          <li>
            <Link to="https://chrome.google.com/webstore/detail/lastpass-free-password-ma/hdokiejnpimakedhajhdlcegeplioahd">
              LastPass
            </Link>
          </li>
          <li>
            <Link to="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi">
              React Developer Tools
            </Link>
          </li>
          <li>
            <Link to="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd">
              Redux DevTools
            </Link>
          </li>
          <li>
            <Link to="https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm">
              uBlock Origin
            </Link>
          </li>
          <li>
            <Link to="https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa">
              JSON Formatter
            </Link>
          </li>
          <li>
            <Link to="https://chrome.google.com/webstore/detail/blank-new-tab-page/jonikckfpolfcdcgdficelkfffkloemh">
              Blank New Tab Page
            </Link>
          </li>
          <li>
            <Link to="https://chrome.google.com/webstore/detail/the-great-suspender/klbibkeccnjlkjkiokjodocebajanakg">
              The Great Suspender
            </Link>{' '}
            (recovers memory used by inactive tabs by suspending them)
          </li>
        </ul>

        <Heading as="h2" looksLike="h4" textColor="secondary">
          Desktop Software
        </Heading>

        <ul>
          <li>
            <Link to="https://www.alfredapp.com/">Alfred</Link>
          </li>
          <li>
            <Link to="https://www.figma.com/">Figma</Link>
          </li>
          <li>
            <Link to="https://www.lastpass.com/">LastPass</Link>
          </li>
          <li>
            <Link to="https://www.iterm2.com/">iTerm2</Link>
          </li>
          <li>
            <Link to="https://spotify.com/">Spotify</Link>
          </li>
          <li>
            <Link to="https://kapeli.com/dash">Dash</Link>
          </li>
          <li>
            <Link to="https://slack.com/">Slack</Link>
          </li>
          <li>
            <Link to="https://discord.com/">Discord</Link>
          </li>
          <li>
            <Link to="https://zoom.us/">Zoom.us</Link>
          </li>
          <li>
            <Link to="https://www.microsoft.com/en-gb/microsoft-365/microsoft-teams/group-chat-software">
              Microsoft Teams
            </Link>
          </li>
          <li>
            <Link to="https://www.google.com/chrome">Google Chrome</Link>
          </li>
          <li>
            <Link to="https://www.mozilla.org/en-US/firefox/developer/">
              Firefox Developer Edition
            </Link>
          </li>
          <li>
            <Link to="https://www.notion.so/">Notion</Link>
          </li>
          <li>
            <Link to="https://todoist.com/r/kent_c_dodds_rcfmfh">Todoist</Link>
          </li>
          <li>
            <Link to="https://www.docker.com/">Docker</Link>
          </li>
          <li>
            <Link to="https://www.grammarly.com/">Grammarly</Link>
          </li>
          <li>
            <Link to="https://karabiner-elements.pqrs.org/">Karabiner-Elements</Link>. A keyboard
            customizer for macOS.
          </li>
          <li>
            <Link to="https://pomodoneapp.com/">PomoDone App</Link>
          </li>
          <li>
            <Link to="https://www.postman.com/">Postman</Link>
          </li>
          <li>
            <Link to="https://rectangleapp.com/">Rectangle</Link>. Useful app that allows you to
            move and resize windows in macOS using keyboard shortcuts.
          </li>
          <li>
            <Link to="https://www.skype.com/en/">Skype</Link>
          </li>
          <li>
            <Link to="https://www.sourcetreeapp.com/">Sourcetree</Link>. I use it when I'm too lazy
            to use the terminal for Git commands.
          </li>
          <li>
            <Link to="https://sparkmailapp.com/">Spark</Link>. A good app if you have too many email
            accounts and want to have them all in one place.
          </li>
          <li>
            <Link to="https://surfshark.com/">Surfshark</Link>
          </li>
        </ul>

        <Heading as="h2" looksLike="h4" textColor="secondary">
          Desk Setup
        </Heading>

        <ul>
          <li>
            <strong>Macbook Pro (13-inch, 2016)</strong>
            <ul>
              <li>Processor: 2.9 GHz Dual-Core Intel Core i5</li>
              <li>Memory: 8 GB 2133 MHz LPDDR3</li>
              <li>Storage: 256 GB SSD</li>
            </ul>
          </li>
          <li>
            <strong>Macbook Pro (16-inch, 2019)</strong> - Work computer
            <ul>
              <li>Processor: 2.6 GHz 6-core Intel Core i7</li>
              <li>Memory: 16 GB 2667 MHz DDR4</li>
              <li>Storage: 512 GB SSD</li>
            </ul>
          </li>
          <li>Dell Ultrasharp U2520D USB-C Monitor QHD (2560x1440)</li>
          <li>Logitech MX Master 3 Wireless Mouse</li>
          <li>
            <Link to="https://www.amazon.com/Mechanical-Keyboard-Extra-Thin-Switches-Rollover/dp/B0722GG88M">
              Havit HV-KB390L Low Profile Mechanical Keyboard
            </Link>
          </li>
          <li>
            <Link to="https://www.sony.com/electronics/headband-headphones/wh-1000xm3">
              Sony WH-1000XM3 Wireless Noise-Canceling Headphones
            </Link>
          </li>
          <li>
            Desk:{' '}
            <Link to="https://www.ikea.com/us/en/p/klimpen-tabletop-light-gray-gray-90353747/">
              IKEA KLIMPEN
            </Link>{' '}
            (table top) + 2{' '}
            <Link to="https://www.ikea.com/us/en/p/oddvald-trestle-black-10118971/">
              IKEA ODDVALD
            </Link>
          </li>
          <li>
            Chair:{' '}
            <Link to="https://www.ikea.com/us/en/p/markus-office-chair-vissle-dark-gray-90289172/">
              IKEA MARKUS
            </Link>
          </li>
        </ul>
      </Container>
    </>
  );
}
