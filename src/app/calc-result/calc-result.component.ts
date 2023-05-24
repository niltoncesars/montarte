import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { RouterExtensions } from 'nativescript-angular/router';
import { html2PdfFile } from 'nativescript-html2pdf';
import { ShareFile } from "nativescript-share-file";

import * as fs from "tns-core-modules/file-system";

@Component({
    selector: "CalcResult",
    moduleId: module.id,
    templateUrl: "./calc-result.component.html"
})

export class CalcResultComponent {

    //calculo: Calculo;

    pdfFile: string = null;

    results = [
        {
            outputs: [
                { name: 'Qtde de Peças', value: 2, unit: 'un' },
                { name: 'Altura', value: 100, unit: 'mm' },
                { name: 'Largura', value: 300, unit: 'mm' }
            ]
        },
        {
            outputs: [
                { name: 'Qtde de Peças', value: 3, unit: 'un' },
                { name: 'Altura', value: 100, unit: 'mm' },
                { name: 'Largura', value: 300, unit: 'mm' }
            ]
        }
    ]

    constructor(
            private router: RouterExtensions,
            private route: ActivatedRoute) {
        //this.calculo = CALCULOS[parseInt(this.route.snapshot.paramMap.get('id'))];
    }

    public goBack() {
        this.router.backToPreviousPage();
    }

    public createPdf() {
        /*
        const vm = new Observable();
        const documents: Folder = <Folder>knownFolders.documents();
        const folder: Folder = <Folder>documents.getFolder(vm.get("folderName") || "testFolder");
        const file: File = <File>folder.getFile(`${(vm.get("filename") || "testFile")}.html`);

        file.writeText(vm.get("fileTextContent") || "some random content")
            .then(() => {
                file.readText()
                    .then((res) => {
                        vm.set("sucessMessage", `Sucessfully saved in${file.path}`);
                        vm.set("writtenContent", res);
                        vm.set("isItemVisible", true);
                    });
            }).catch((err) => {
                console.log(err);
            });

        html2PdfFile('<p>Hello World</p>', this.pdfFile.path);
        */

        new ShareFile().open({
            path: this.pdfFile,
            intentTitle: 'Open text file with:',
            rect: { x: 110, y: 110, width: 0, height: 0 },
            options: true, // optional iOS
            animated: true // optional iOS
        });
    }

    public onShare() {
        let file = fs.knownFolders.documents().getFile('myPdf.pdf');
        this.pdfFile = file.path;
        if (fs.File.exists(this.pdfFile)) {
            file.remove().then(res => {
                this.createPdf();
            });
        } else {
            this.createPdf()
        }
    }
}
