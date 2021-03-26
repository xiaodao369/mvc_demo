/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module login {

	export class UI_loginView extends fairygui.GComponent {
		public m_btn_login:fairygui.GButton;
		public static URL:string = "ui://tzh1gxwyca7l0";

		public static createInstance():UI_loginView {
			return <UI_loginView>(fairygui.UIPackage.createObject("login", "loginView"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.m_btn_login = <fairygui.GButton>(this.getChild("btn_login"));
		}
	}
}