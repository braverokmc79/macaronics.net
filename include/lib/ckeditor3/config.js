/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for a single toolbar row.
	config.language = 'ko';

	config.toolbarGroups = [
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'forms' },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'tools' },
		{ name: 'others' },
		{ name: 'about' },
		
		
	];
	

		 
	config.removePlugins = 'about,uicolor,tliyoutube2,gg';

	// The default plugins included in the basic setup define some buttons that
	// are not needed in a basic editor. They are removed here.
	//config.removeButtons = 'Cut,Copy,Paste,Undo,Redo,Anchor,Underline,Strike,Subscript,Superscript';
	config.extraPlugins = 'widget,divarea,html5video,imageresponsive,image2,locationmap,colorbutton,sourcedialog,listblock,panel,panelbutton,floatpanel,richcombo,font';
	// Dialog windows are also simplified.
	config.removeDialogTabs = 'link:advanced';
	
	//함수안에 아래 내용 포함
	config.font_names = '돋움; Nanum Gothic Coding; 맑은 고딕; 바탕; 궁서; Quattrocento Sans;' + CKEDITOR.config.font_names; 
	
	config.locationMapPath = '/include/lib/ckeditor3/plugins/locationmap/';
	config.ckfinder = true;
	
	
};
