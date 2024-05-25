# MJML - HTML EMAIL FRAMEWORK

MJML is a framework for creating custom emails, without worrying about the compatibility of raw html and css, whether the styles are inline or external etc.

<p align="center"><img width="500" src="https://documentation.mjml.io/images/logo.png"></p>

## Key Points

```HTML
    <mj-style>
      .title-h div {
        line-height: 200px !important;
      }
      .call-to-action a {
          font-size: 30px !important  ;
        }
      @media only screen and (max-width:480px) {
        .title-h div {
          line-height: 40px !important  ;
        }
      }
      <!-- important to override base styles
      use specificity like div and a
      -->

      @media only screen and (max-width:340px) {
        .call-to-action a {
          font-size: 20px !important  ;
        }
      }
    </mj-style>
```
