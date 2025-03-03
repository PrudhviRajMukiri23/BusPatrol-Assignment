export default class CupcakeIpsumLocators {
    cupcakeIpsum_logo = {
        xpath: "//h1[@id='logo']",
        description: "logo with Cupcake Ipsum - Sugar-coated Lorem Ipsum Generator text"
    }
    cupcakeIpsum_Paragraph = {
        xpath: "//input[@name='numberOfParagraphs']",
        description: "Paragraphs input xpath"
    }
    cupcakeIpsum_shortParagraphLengthRadio = {
        xpath: "//div[@id='length_of_paragraph']/descendant::input[@value='short']",
        description: "Short radio button xpath"
    }
    cupcakeIpsum_cupCakeIpsumDolorSitAmetCheckbox = {
        xpath: "//input[@name='startsWithCupcakeIpsum' and @type='checkbox']",
        description: 'Start with "Cupcake ipsum dolor sit amet" radio button'
    }
    cupcakeIpsum_cupCakeIpsumDolorSitAmetInstances = {
        xpath: "//*[contains(text(), 'Cupcake ipsum dolor sit amet')]",
        description: 'Start with "Cupcake ipsum dolor sit amet" instances on page'
    }
    cupcakeIpsum_copyButton = {
        xpath: "//button[@id='copy_button']",
        description: 'Copy to clipboard button'
    }
    cupcakeIpsum_generateButton = {
        xpath: "//button[@id='generate_button']",
        description: 'Generate button xpath'
    }


}