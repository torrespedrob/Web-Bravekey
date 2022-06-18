from selenium import webdriver

driver = webdriver.Chrome()

driver.get('http://127.0.0.1:5500/src/index.html#description')
# Get button you are going to click by its id ( also you could us find_element_by_css_selector to get element by css selector)
button_element = driver.find_element_by_id('#clicky')
button_element.click()
