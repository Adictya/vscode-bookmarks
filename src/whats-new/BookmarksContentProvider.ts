/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

// tslint:disable-next-line:max-line-length
import { ChangeLogItem, ChangeLogKind, ContentProvider, Header, Image, Sponsor } from "../../vscode-whats-new/src/ContentProvider";

export class WhatsNewBookmarksContentProvider implements ContentProvider {

    public provideHeader(logoUrl: string): Header {
        return <Header> {logo: <Image> {src: logoUrl, height: 50, width: 50}, 
            message: `<b>Bookmarks</b> helps you to navigate in your code, <b>moving</b> 
            between important positions easily and quickly. No more need 
            to <i>search for code</i>. It also supports a set of <b>selection</b>
            commands, which allows you to select bookmarked lines and regions between
            lines.`};
    }

    public provideChangeLog(): ChangeLogItem[] {
        const changeLog: ChangeLogItem[] = [];
        changeLog.push({kind: ChangeLogKind.NEW, message: "Adds an all-new Bookmarks <b>Side Bar</b>"});
        changeLog.push({kind: ChangeLogKind.NEW, message: "Adds <b>Column Position</b> and <b>Label</b> support"});
        changeLog.push({kind: ChangeLogKind.NEW, message: "Adds <b>Edit Label</b> command in the <b>Side Bar</b>"});
        changeLog.push({kind: ChangeLogKind.NEW, message: `Adds <b>Localization</b> support - <b>Russian</b> (Thanks to 
            @Inter-Net-Pro - <a title=\"Open PR #151\" 
            href=\"https://github.com/alefragnani/vscode-bookmarks/pull/151\">
            PR #151</a>)`});
        changeLog.push({kind: ChangeLogKind.FIXED, message: `Wrong bookmark position on comment lines (<a title=\"Open Issue #108\" 
            href=\"https://github.com/alefragnani/vscode-bookmarks/issues/108\">
            Issue #108</a> - Thanks to @edgardmessias - <a title=\"Open PR #136\" 
            href=\"https://github.com/alefragnani/vscode-bookmarks/pull/136\">
            PR #136</a>)`});
        changeLog.push({kind: ChangeLogKind.FIXED, message: `Workaround for formatters, using a new setting (<a title=\"Open Issue #118\" 
            href=\"https://github.com/alefragnani/vscode-bookmarks/issues/118\">
            Issue #118</a>)</b>`});
        changeLog.push({kind: ChangeLogKind.NEW, message: `Setting to choose <b>background color</b> of 
            bookmarked files (Thanks to @edgardmessias - <a title=\"Open PR #133\" 
            href=\"https://github.com/alefragnani/vscode-bookmarks/pull/133\">
            PR #1334</a>)</b>`});
        changeLog.push({kind: ChangeLogKind.NEW, message: `Setting to choose to <b>wrap navigation 
            around</b> at the first and last bookmarks (Thanks to @miqh - <a title=\"Open PR #155\" 
            href=\"https://github.com/alefragnani/vscode-bookmarks/pull/155\">
            PR #155</a>)</b>`});
        changeLog.push({kind: ChangeLogKind.NEW, message: `Commands added to Context Menu (Thanks to 
            @miqh - <a title=\"Open PR #154\" 
            href=\"https://github.com/alefragnani/vscode-bookmarks/pull/154\">
            PR #154</a>)</b>`});
        return changeLog;
    }

    public provideSponsors(): Sponsor[] {
        const sponsors: Sponsor[] = [];
        const sponsorCodeStream: Sponsor = <Sponsor>{
            title: "Try Codestream",
            link: "https://codestream.com/?utm_source=vscmarket&utm_medium=banner&utm_campaign=bookmarks",
            image: "https://alt-images.codestream.com/codestream_logo_bookmarks.png",
            width: 35,
            message: `<p>Discuss, review, and share code with your team in VS Code. Links discussions about 
                code to your code. Integrates w/ Slack, Jira, Trello, and Live Share.</p>`,
            extra: 
                `<a title="Try CodeStream" href="https://codestream.com/?utm_source=vscmarket&utm_medium=banner&utm_campaign=bookmarks">
                 Try it free</a>` 
        };
        sponsors.push(sponsorCodeStream);
        return sponsors
    }
   
}